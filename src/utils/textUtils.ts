export const textLineBreaker = (text: string) => {
  // 콤마(,)를 기준으로 줄을 변경합니다.
  return text.split(",").join("<br />");
};
