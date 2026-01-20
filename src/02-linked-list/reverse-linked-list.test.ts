import { LinkedList } from "./linked-list";

describe("Reverse a linked List", () => {
	it("should reverse a linked list", () => {
		const lList = new LinkedList();
		lList.insertTail(1);
		lList.insertTail(2);
		lList.insertTail(3);
		lList.insertTail(4);
		lList.insertTail(5);

		lList.reverse();

		expect(lList.getValues()).toStrictEqual([5, 4, 3, 2, 1]);
	});
});
