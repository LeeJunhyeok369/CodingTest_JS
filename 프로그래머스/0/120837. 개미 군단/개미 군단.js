function solution(hp) {
  const f_ant = Math.floor(hp / 5);
  const s_ant = Math.floor((hp - f_ant * 5) / 3);
  const t_ant = hp - f_ant * 5 - s_ant * 3;
  return f_ant + s_ant + t_ant;
}