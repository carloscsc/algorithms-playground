export class ListNode {
	constructor(
		public value: unknown,
		public next: ListNode | null = null,
	) {
		this.value = value;
		this.next = next;
	}
}

export class LinkedList {
	public head: ListNode;
	public tail: ListNode;

	constructor() {
		this.head = new ListNode(-1);
		this.tail = this.head;
	}

	get(index: number) {
		let curr = this.head.next;
		let i = 0;

		while (curr) {
			if (i === index) {
				return curr.value;
			}
			i++;
			curr = curr.next;
		}

		return -1;
	}

	insertHead(value: unknown) {
		const node = new ListNode(value, this.head.next);
		this.head.next = node;
		if (!node.next) this.tail = node;
	}

	insertTail(value: unknown) {
		this.tail.next = new ListNode(value);
		this.tail = this.tail.next;
	}

	remove(index: number) {
		let i = 0;
		let curr: ListNode | null = this.head;

		while (i < index && curr) {
			i++;
			curr = curr.next;
		}

		if (curr?.next) {
			if (curr.next === this.tail) this.tail = curr;
			curr.next = curr.next.next;
			return true;
		}
		return false;
	}

	getValues() {
		let curr = this.head.next;
		const res: any[] = [];

		while (curr) {
			res.push(curr.value);
			curr = curr.next;
		}

		return res;
	}

	reverse() {
		let curr = this.head.next;
		let prev: ListNode | null = null;

		while (curr) {
			const nxt = curr.next!;
			curr.next = prev;
			prev = curr;
			curr = nxt;
		}

		this.tail = this.head.next!;
		this.head.next = prev;
	}
}
