export default function splitGroups<Item>(data: Item[], count: number): Item[][] {
    const result: Item[][] = [];
    for (let i = 0; i < data.length; i += count) {
        result.push(data.slice(i, i + count));
    }
    return result
}
