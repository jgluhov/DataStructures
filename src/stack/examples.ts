import Stack from './stack';

export const isPolindrome = (word: string): boolean => {
  const stack = new Stack();

  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
  }

  let rword = '';

  while(stack.length() > 0) {
    rword += stack.pop();
  }

  if (word === rword) {
    return true;
  }

  return false;
}