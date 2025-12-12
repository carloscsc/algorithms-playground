/**
 * Leet Code 26 - Remove Duplicates from Sorted Array
 */

describe("#1 Sorted Set", () => {
	function removeDuplicates(nums: number[]): number {
		const unique = Array.from(new Set(nums)).sort((a, b) => a - b);

		for (let i = 0; i < unique.length; i++) {
			nums[i] = unique[i] as number;
		}

		return unique.length;
	}

	it("Should remove duplicated number from a sorted array", () => {
		expect(removeDuplicates([1, 1, 2])).toBe(2);
		expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
	});
});

describe("#2 Two Pointers - I", () => {
	function removeDuplicates(nums: number[]): number {
		const n = nums.length;
		let l = 0;
		let r = 0;

		while (r < n) {
			nums[l] = nums[r] as number;
			while (r < n && nums[r] === nums[l]) {
				r++;
			}
			l++;
		}
		return l;
	}

	it("Should remove duplicated number from a sorted array", () => {
		expect(removeDuplicates([1, 1, 2])).toBe(2);
		expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
	});
});

describe("#3 Two Pointers - II", () => {
	function removeDuplicates(nums: number[]): number {
		let index = 1;

		for (let i = 1; i < nums.length; i++) {
			if (nums[i] !== nums[i - 1]) {
				nums[index] = nums[i] as number;
				index++;
			}
		}

		return index;
	}

	it("Should remove duplicated number from a sorted array", () => {
		expect(removeDuplicates([1, 1, 2])).toBe(2);
		expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
	});
});
