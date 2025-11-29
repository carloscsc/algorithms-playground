describe("Static Arrays methods", () => {
	it("Should read an array at a given index", () => {
		//        index: 0, 1, 2
		const myArray = [1, 2, 3];

		// read at index 1
		expect(myArray[1]).toBe(2);
	});

	it("Should traversing through an array", () => {
		const myArray = [1, 2, 3, 4, 5];
		const newArray = [];

		for (let i = 0; i < myArray.length; i++) {
			newArray.push(myArray[i]);

			// the value of each index should be the same
			expect(myArray[i]).toBe(newArray[i]);
		}
	});

	it("Should delete at the end of an array", () => {
		// Remove from the last position in the array
		const removeEnd = (arr: unknown[]) => {
			if (arr.length > 0) {
				arr[arr.length - 1] = 0;
				arr.length--;
			}
		};
		const myArray = [1, 2, 3, 4];
		removeEnd(myArray);

		expect(myArray.length).toBe(3);
		expect(myArray[myArray.length - 1]).toBe(3);
	});

	it("Should delete at an 'ith' index", () => {
		// Remove value at index i before shifting elements to the left
		const removeAt = (arr: unknown[], i: number) => {
			for (let index = i + 1; index < arr.length; index++) {
				arr[index - 1] = arr[index];
			}
			arr.length--;
		};

		const myArray = [1, 2, 3, 4, 5, 6];
		removeAt(myArray, 2);

		expect(myArray.length).toBe(5);
		expect(myArray).toStrictEqual([1, 2, 4, 5, 6]);
	});

	it("should insert at the end of and array", () => {
		const insertEnd = (arr: unknown[], n: unknown, capacity: number) => {
			if (arr.length >= capacity) {
				throw new Error("Out of capacity");
			}
			arr[arr.length] = n;
		};

		const myArray = [0, 1, 2, 3, 4, 5];
		const capacity = 10;

		insertEnd(myArray, 6, capacity);
		insertEnd(myArray, 7, capacity);
		insertEnd(myArray, 8, capacity);
		insertEnd(myArray, 9, capacity);

		expect(myArray).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
		expect(() => {
			insertEnd(myArray, 10, capacity);
		}).toThrow("Out of capacity");
	});

	it("should insert at 'ith' position", () => {
		const insertAt = (arr: unknown[], i: number, n: unknown) => {
			for (let index = arr.length - 1; index > i - 1; index--) {
				arr[index + 1] = arr[index];
			}

			arr[i] = n;
		};

		const myArray = [1, 2, 4, 5];
		insertAt(myArray, 2, 3);

		expect(myArray).toStrictEqual([1, 2, 3, 4, 5]);
	});
});
