describe("Stack tests", () => {
	it("Valid Parentheses - my solution - It's pass but is wrong", () => {
		/**
		 * This is incorrect because the question statement made no mention
		 * that the arrays could come in that order: "()[]{}", which invalidates
		 * the entire logic.
		 */

		const isValid = (s: string): boolean => {
			const oposite: { [key: string]: string } = {
				"[": "]",
				"(": ")",
				"{": "}",
			};

			let r = s.length - 1;
			for (let i = 0; i < s.length / 2; i++) {
				if (s[r] !== oposite[s[i] as string]) {
					return false;
				}
				r--;
			}

			return true;
		};

		expect(isValid("[]")).toBe(true);
		expect(isValid("([{}])")).toBe(true);
		expect(isValid("[(])")).toBe(false);
	});

	it("Valid Parentheses", () => {
		const isValid = (s: string): boolean => {
			const stack: string[] = [];
			const closeToOpen: { [key: string]: string } = {
				")": "(",
				"]": "[",
				"}": "{",
			};

			for (const c of s) {
				if (c in closeToOpen) {
					if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
						stack.pop();
					}
				} else {
					stack.push(c);
				}
			}

			return stack.length === 0;
		};

		// expect(isValid("[]")).toBe(true);
		// expect(isValid("([{}])")).toBe(true);
		// expect(isValid("[(])")).toBe(false);
		expect(isValid("()[]{}")).toBe(true);
	});
});
