# Roman Numerals

Write a method to convert numbers into Roman numerals. Roman numerals are based on seven symbols:

Symbol  Value
I       1
V       5
X       10
L       50
C       100
D       500
M       1,000

The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc.

The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and instead of writing LXXXX for 90, you write XC.

You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC. You cannot count higher than 3,999 in Roman numerals.

Draft some specifications and input-output examples to brainstorm the behaviors that you'll want to capture in your application. Tackle them one-by-one, worrying only about the future behaviors once the current example is implemented. All specifications should be listed in the project's README.md file. Do not move on to the next exercise until you've had a teacher review your code and specs.

## Specifications

1) Program converts 1 to roman numerals
input: 1
output: I

2) Program converts 3 to roman numerals
input: 3
output: III

3) Program converts 4 to roman numerals
input: 4
output: IV

4) Program converts 5 to roman numerals
input: 5
output: V

5) Program converts 8 to roman numerals
input: 8
output: VIII

6) Program converts 9 to roman numerals
input: 9
output: IX

7) Program converts 10 to roman numerals
input: 10
output: X
