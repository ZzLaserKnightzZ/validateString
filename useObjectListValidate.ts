function useObjectListValidate<TInput extends { isSelected: boolean }>(data: TInput[], minSelect: number = 1, maxSelect: number = 10, errorMsg: string = "กรุณาเลือกข้อมูล") {

    const [value, setValue] = useState<TInput[]>(data);
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState("");

    const validat = ()=>{
        let selected = value.filter(x => x.isSelected === true);
        console.log(selected.length,selected.length >= minSelect)
        if (selected.length >= minSelect) {
            if (selected.length <= maxSelect) {
                setError("");
                setIsValid(true);
            } else {
                setError(`${errorMsg} ไม่เกิน ${maxSelect} อย่าง`);
                setIsValid(false);
            }
        } else {
            setError(`${errorMsg} อย่างน้อย ${minSelect} อย่าง`);
            setIsValid(false);
        }

    }
    
    useEffect(() => {
        validat();
    }, [value]);

    return { value, error, setValue, isValid,validat };
}
