const [prevValue, setPrevValue] = useState(0);
 const [nextValue, setNextValue] = useState("");
 const [op, setOp] = useState(null);
 const [result, setResult] = useState("0");

 useEffect(() => {}, [op, nextValue, prevValue]);