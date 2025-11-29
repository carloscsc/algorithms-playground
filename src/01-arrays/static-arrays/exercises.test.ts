it("should reverse an array in place", () => {
	const reverseArray = (arr: number[]) => {
		let end = arr.length - 1;

		for (let i = 0; i < end; i++) {
			const temp = arr[i];
			arr[i] = arr[end] as number;
			arr[end--] = temp as number;
		}

		return arr;
	};

	const arr1 = [1, 2, 3, 4, 5];
	reverseArray(arr1);
	expect(arr1).toStrictEqual([5, 4, 3, 2, 1]);

	const arr2 = [10, 20];
	reverseArray(arr2);
	expect(arr2).toStrictEqual([20, 10]);
});

it("should remove all occurrences of a value", () => {
	const removeAll = (arr: number[], value: number) => {
		let index = 0;

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] !== value) {
				arr[index++] = arr[i] as number;
			}
		}

		return index;
	};

	const arr = [1, 2, 3, 2, 4, 2, 5];
	const newLength = removeAll(arr, 2);

	expect(newLength).toBe(4);
	expect(arr.slice(0, newLength)).toStrictEqual([1, 3, 4, 5]);
});
