/**
 * Static Arrays - Practice Exercises
 * Difficulty: Easy -> Medium -> Hard
 */

describe("Level 1 - Easy", () => {
	it("should find the maximum value in an array", () => {
		const findMax = (arr: number[]): number => {
			let max = arr[0] as number;

			for (let i = 1; i < arr.length; i++) {
				if (arr[i]! > max) {
					max = arr[i] as number;
				}
			}
			return max;
		};

		expect(findMax([3, 1, 4, 1, 5, 9, 2, 6])).toBe(9);
		expect(findMax([-5, -2, -8, -1])).toBe(-1);
		expect(findMax([42])).toBe(42);
	});

	it("should calculate the sum of all elements", () => {
		const sumArray = (arr: number[]): number => {
			let acc = 0;

			for (let i = 0; i < arr.length; i++) {
				acc += arr[i] as number;
			}

			return acc;
		};

		expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
		expect(sumArray([-1, 1, -2, 2])).toBe(0);
		expect(sumArray([])).toBe(0);
	});

	it("should check if array is sorted in ascending order", () => {
		const isSorted = (arr: number[]): boolean => {
			let isSorted = true;

			for (let i = 0; i < arr.length; i++) {
				if (arr[i]! > arr[i + 1]!) {
					isSorted = false;
				}
			}

			return isSorted;
		};

		expect(isSorted([1, 2, 3, 4, 5])).toBe(true);
		expect(isSorted([1, 3, 2, 4, 5])).toBe(false);
		expect(isSorted([5, 4, 3, 2, 1])).toBe(false);
		expect(isSorted([])).toBe(true);
		expect(isSorted([1])).toBe(true);
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
});

describe("Level 2 - Medium", () => {
	it("should rotate array k positions to the right in-place", () => {
		const reverse = (arr: number[], start: number, end: number) => {
			for (let i = start; i < end; i++) {
				const temp = arr[i];
				arr[i] = arr[end] as number;
				arr[end--] = temp as number;
			}
			return arr;
		};

		const rotate = (arr: number[], k: number): void => {
			k = k % arr.length;

			reverse(arr, 0, arr.length - 1); // Reverse all
			reverse(arr, 0, k - 1);
			reverse(arr, k, arr.length - 1); // Reverse remaining
		};

		// const rotate = (arr: number[], k: number) => {
		// 	k = k % arr.length;

		// 	const left = [];
		// 	const right = [];
		// 	for (let i = 0; i < arr.length; i++) {
		// 		if (i < arr.length - k) {
		// 			left.push(arr[i]);
		// 		} else {
		// 			right.push(arr[i]);
		// 		}
		// 	}

		// 	let j = 0;
		// 	for (let i = 0; i < arr.length; i++) {
		// 		if (i < right.length) {
		// 			arr[i] = right[i]!;
		// 		} else {
		// 			arr[i] = left[j]!;
		// 			j++;
		// 		}
		// 	}
		// };

		const arr1 = [1, 2, 3, 4, 5, 6, 7];
		rotate(arr1, 3);
		expect(arr1).toStrictEqual([5, 6, 7, 1, 2, 3, 4]);

		const arr2 = [-1, -100, 3, 99];
		rotate(arr2, 2);
		expect(arr2).toStrictEqual([3, 99, -1, -100]);

		const arr3 = [1, 2, 3];
		rotate(arr3, 4); // k > length
		expect(arr3).toStrictEqual([3, 1, 2]);
	});

	it("should move all zeros to the end while maintaining order", () => {
		const moveZeros = (arr: number[]): void => {
			// TODO: Implement - O(n) time, O(1) space
			// Hint: Two pointers technique

			let j = 0;

			for (let i = 0; i < arr.length; i++) {
				if (arr[i] !== 0) {
					[arr[j]!, arr[i]!] = [arr[i]!, arr[j]!];
					j++; //?
				}
			}
		};

		const arr1 = [0, 1, 0, 3, 12];
		moveZeros(arr1);
		expect(arr1).toStrictEqual([1, 3, 12, 0, 0]);

		const arr2 = [0, 0, 1];
		moveZeros(arr2);
		expect(arr2).toStrictEqual([1, 0, 0]);

		const arr3 = [1, 2, 3];
		moveZeros(arr3);
		expect(arr3).toStrictEqual([1, 2, 3]);
	});

	it("should find two numbers that add up to target (sorted array)", () => {
		const twoSum = (arr: number[], target: number): [number, number] | null => {
			// TODO: Implement - O(n) time, O(1) space
			// Hint: Two pointers from both ends
			// Return indices (1-indexed) or null if not found
			throw new Error("Not implemented");
		};

		expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 2]);
		expect(twoSum([2, 3, 4], 6)).toStrictEqual([1, 3]);
		expect(twoSum([-1, 0], -1)).toStrictEqual([1, 2]);
		expect(twoSum([1, 2, 3], 10)).toBe(null);
	});
});

describe("Level 3 - Hard", () => {
	it("should merge two sorted arrays into the first array in-place", () => {
		const merge = (
			nums1: number[],
			m: number,
			nums2: number[],
			n: number,
		): void => {
			// TODO: Implement - O(m+n) time, O(1) space
			// nums1 has enough space (m + n) to hold all elements
			// Hint: Start from the end
			throw new Error("Not implemented");
		};

		const arr1 = [1, 2, 3, 0, 0, 0];
		merge(arr1, 3, [2, 5, 6], 3);
		expect(arr1).toStrictEqual([1, 2, 2, 3, 5, 6]);

		const arr2 = [1];
		merge(arr2, 1, [], 0);
		expect(arr2).toStrictEqual([1]);

		const arr3 = [0];
		merge(arr3, 0, [1], 1);
		expect(arr3).toStrictEqual([1]);

		const arr4 = [4, 5, 6, 0, 0, 0];
		merge(arr4, 3, [1, 2, 3], 3);
		expect(arr4).toStrictEqual([1, 2, 3, 4, 5, 6]);
	});

	it("should find the majority element (appears more than n/2 times)", () => {
		const majorityElement = (arr: number[]): number => {
			// TODO: Implement - O(n) time, O(1) space
			// Hint: Boyer-Moore Voting Algorithm
			throw new Error("Not implemented");
		};

		expect(majorityElement([3, 2, 3])).toBe(3);
		expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
		expect(majorityElement([1])).toBe(1);
		expect(majorityElement([1, 1, 1, 1, 2, 3, 4])).toBe(1);
	});

	it("should sort array of 0s, 1s, and 2s in-place (Dutch National Flag)", () => {
		const sortColors = (arr: number[]): void => {
			// TODO: Implement - O(n) time, O(1) space, single pass
			// Hint: Three pointers (low, mid, high)
			throw new Error("Not implemented");
		};

		const arr1 = [2, 0, 2, 1, 1, 0];
		sortColors(arr1);
		expect(arr1).toStrictEqual([0, 0, 1, 1, 2, 2]);

		const arr2 = [2, 0, 1];
		sortColors(arr2);
		expect(arr2).toStrictEqual([0, 1, 2]);

		const arr3 = [0];
		sortColors(arr3);
		expect(arr3).toStrictEqual([0]);

		const arr4 = [1, 2, 0, 1, 2, 0, 1, 2, 0];
		sortColors(arr4);
		expect(arr4).toStrictEqual([0, 0, 0, 1, 1, 1, 2, 2, 2]);
	});
});
