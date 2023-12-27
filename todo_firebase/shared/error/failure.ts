export class Failure {
    // Failure constructor
    constructor(public message: string) {}

    toString(): string {
        return this.utf8convert(this.message);
    }

    private utf8convert(text: string): string {
        const bytes = text.split('').map(char => char.charCodeAt(0));
        const uint8Array = new Uint8Array(bytes);
        return String.fromCharCode.apply(null, Array.from(uint8Array));
    }

}