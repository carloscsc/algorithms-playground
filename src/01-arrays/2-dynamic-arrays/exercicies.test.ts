describe("Dynamic array NeetCode Exercicies", () => {
	it("Should Concatenate an Array", () => {
		function getConcatenation(nums: number[]) {
			const index = nums.length;

			for (let i = 0; i < index; i++) {
				console.log(nums.length);
				nums[index + i] = nums[i] as number;
			}

			return nums; //?
		}

		// most simple way with javascript
		// const getConcatenation = (nums: number[]) => [...nums, ...nums];

		// Assertions
		expect(getConcatenation([1, 4, 1, 2])).toStrictEqual([
			1, 4, 1, 2, 1, 4, 1, 2,
		]);

		expect(getConcatenation([1, 4, 1, 2, 1, 2])).toStrictEqual([
			1, 4, 1, 2, 1, 2, 1, 4, 1, 2, 1, 2,
		]);
	});
});
