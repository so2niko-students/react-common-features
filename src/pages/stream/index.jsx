import { uploadFile } from "../../services/stream";

const Stream = () => {
    const handleChangeFile = (ev) => {
        const file = ev.target.files[0];

        if(file){
            uploadFile(file).then(d => console.log(d));
        }
    }

    return (
        <input type="file" onChange={handleChangeFile} />
    )
}

export default Stream;