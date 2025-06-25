interface Props {
  a: number;
  b: number;
}
const SwapValues = ({ a, b }: Props) => {
  console.log(a, b);
  [a, b] = [b, a];
  console.log(a);
  console.log(b);
  console.log("hello");
  return <div></div>;
};
export default SwapValues;
