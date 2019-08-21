import { TranslitResult } from '@dagonmetric/ng-translit';

function formatCodePoints(str?: string): string {
    if (str == null) {
        return '';
    }

    const cpArray: string[] = [];
    for (const c of str) {
        const cp = c.codePointAt(0);
        if (cp != null && /[\u1000-\u109F\uAA60-\uAA7F\uA9E0-\uA9FF]/.test(c)) {
            cpArray.push(`\\u${cp.toString(16)}`);
        } else if (/[\b\f\n\r\t\v]/.test(c)) {
            if (c === '\n') {
                cpArray.push('\\n');
            } else if (c === '\r') {
                cpArray.push('\\r');
            } else if (c === '\t') {
                cpArray.push('\\t');
            } else if (c === '\f') {
                cpArray.push('\\f');
            } else if (c === '\v') {
                cpArray.push('\\v');
            } else if (c === '\b') {
                cpArray.push('\\b');
            }
        } else {
            cpArray.push(`${c}`);
        }
    }

    return cpArray.join('');
}

export function toFailOutput(input: string, result: TranslitResult): string {
    let str = `\n\ninput: ${formatCodePoints(input)}\n`;
    str += `output: ${formatCodePoints(result.outputText)}\n\n`;

    if (result.traces) {
        for (const trace of result.traces) {
            str += `from: ${formatCodePoints(trace.from)}\n`;
            str += `to: ${formatCodePoints(trace.to)}\n`;
            str += `input: ${formatCodePoints(trace.inputString)}\n`;
            // str += `matched: ${formatCodePoints(trace.matchedString)}\n`;
            str += `replaced: ${formatCodePoints(trace.replacedString)}\n`;

            if (trace.postRuleTraces && trace.postRuleTraces.length > 0) {
                str += 'post rules:\n';
                for (const subTrace of trace.postRuleTraces) {
                    str += `  from: ${formatCodePoints(subTrace.from)}\n`;
                    str += `  to: ${formatCodePoints(subTrace.to)}\n`;
                    str += `  input: ${formatCodePoints(subTrace.inputString)}\n`;
                    // str += `  matched: ${formatCodePoints(subTrace.matchedString)}\n`;
                    str += `  replaced: ${formatCodePoints(subTrace.replacedString)}\n`;
                }
            }
            str += '\n';
        }
    }

    return str;
}
