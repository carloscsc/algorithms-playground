describe("Dynamic array NeetCode Exercicies", () => {
	it("Should Concatenate an Array", () => {
		function getConcatenation(nums: number[]) {
			const ans = new Array(nums.length * 2);
			const n = nums.length;
			for (let i = 0; i < n; i++) {
				ans[i] = ans[i + n] = nums[i];
			}
			return ans;
		}

		// most simple way with javascript
		// const getConcatenation = (nums: number[]) => [...nums, ...nums];

		// Assertions
		expect(getConcatenation([1, 4, 1, 2])).toStrictEqual([
			1, 4, 1, 2, 1, 4, 1, 2,
		]);

		expect(getConcatenation([1, 4, 1, 2])).toStrictEqual([
			1, 4, 1, 2, 1, 4, 1, 2,
		]);
	});
});
