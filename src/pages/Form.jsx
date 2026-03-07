import {Form,InputNumber} from "antd"
function Forms() {
    return (
        <>
            <div className="flex items-center justify-center">
                <form className="flex flex-col gap-4 w-1/2">
                    <label >Name:</label>
                    <input className="border " type="text" />
                    <label >Last name:</label>
                    <input className="border " type="text" />
                    <label >age:</label>
                    <input className="border " type="number" />
                    <Form.Item label="Age">
                        <InputNumber  className="w-full" />
                    </Form.Item>
                    <div className="flex justify-center">
                        <button className="bg-blue-400 rounded p-3 w-20">add</button>
                    </div>
                </form>
            </div>
        </>)
}
export default Forms