/**
 * Leet Code 27 - Remove Element
 */

describe("# My Attempt 1", () => {
	/**
	 * Time complexity: O(n)
	 * Space complexity: O(n)
	 */
	function removeElement(nums: number[], val: number): number {
		const temp_arr = [];
		let count = 0;

		for (let i = 0; i < nums.length; i++) {
			if (nums[i] !== val) {
				temp_arr.push(nums[i]);
				count++;
			}
		}

		for (let i = 0; i < temp_arr.length; i++) {
			nums[i] = temp_arr[i] as number;
		}

		return count;
	}

	it("Should remove all occurrences of and value", () => {
		expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
		expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
	});
});

describe("# My Attempt 2", () => {
	/**
	 * Time complexity: O(n)
	 * Space complexity: O(1)
	 */
	function removeElement(nums: number[], val: number): number {
		let index = 0;

		for (let i = 0; i < nums.length; i++) {
			if (nums[i] !== val) {
				nums[index] = nums[i] as number;
				index++;
			}
		}

		return index;
	}

	it("Should remove all occurrences of and value", () => {
		expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
		expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
	});
});
