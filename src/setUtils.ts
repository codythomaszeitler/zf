export function intersects(a : Set<any>, b : Set<any>) {
	const intersect = new Set([...a].filter(i => b.has(i)));
	return intersect.size !== 0;
}