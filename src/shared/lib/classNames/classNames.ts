type Mods = Record<string, boolean>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = []
): string {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, value]) => value)
            .map(([clsn, _]) => clsn),
        ...additional.filter(Boolean),
    ].join(" ");
}
