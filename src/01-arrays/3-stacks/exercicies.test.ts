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

		expect(isValid("[]")).toBe(true);
		expect(isValid("([{}])")).toBe(true);
		expect(isValid("[(])")).toBe(false);
		expect(isValid("()[]{}")).toBe(true);
	});
});

describe("Minimum Stack - my solution + stack of test", () => {
	it("Should design a minimun stack", () => {
		class MinStack {
			private stack: number[] = [];
			private min: number[] = [];

			constructor() {}

			/**
			 * @param {number} val
			 * @return {void}
			 */
			push(val: number) {
				this.stack.push(val);

				if (this.min.length === 0) {
					this.min.push(val);
				} else if (val <= this.min[this.min.length - 1]!) {
					this.min.push(val);
				} else {
					this.min.push(this.min[this.min.length - 1]!);
				}
			}

			/**
			 * @return {void}
			 */
			pop() {
				if (this.stack.length === 0) return;
				this.stack.pop();
				this.min.pop();
			}

			/**
			 * @return {number}
			 */
			top() {
				return this.stack.length > 0
					? this.stack[this.stack.length - 1]
					: this.stack[0];
			}

			/**
			 * @return {number}
			 */
			getMin() {
				return this.min.length > 0
					? this.min[this.min.length - 1]
					: this.min[0];
			}
		}

		function minimunStackTest(input: unknown[]): unknown[] {
			const output: unknown[] = [];
			const stack = new MinStack();

			for (let i = 0; i < input.length; i++) {
				switch (input[i]) {
					case "MinStack":
						output.push(null);
						break;

					case "push":
						stack.push(input[i + 1] as number);
						output.push(null);
						break;

					case "getMin":
						output.push(stack.getMin());
						break;

					case "pop":
						stack.pop();
						output.push(null);
						break;

					case "top":
						output.push(stack.top());
						break;

					default:
						break;
				}
			}

			return output;
		}

		expect(
			minimunStackTest([
				"MinStack",
				"push",
				1,
				"push",
				2,
				"push",
				0,
				"getMin",
				"pop",
				"top",
				"getMin",
			]),
		).toStrictEqual([null, null, null, null, 0, null, 2, 1]);

		expect(
			minimunStackTest([
				"MinStack",
				"push",
				-2,
				"push",
				-2,
				"push",
				-3,
				"push",
				-3,
				"getMin",
				"pop",
				"getMin",
			]),
		).toStrictEqual([null, null, null, null, null, -3, null, -3]);
	});
});
