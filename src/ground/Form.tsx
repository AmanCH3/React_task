import {useForm} from "react-hook-form";
import axios from "axios";
import {useMutation} from "@tanstack/react-query";

function Form() {
    const {
        register, handleSubmit,
        formState
    } = useForm();


    const {errors} = formState;

    console.log(errors?.groundName?.message);

    const apiCall = useMutation({
        mutationKey: ["SAVE_GROUND_DATA"],
        mutationFn(requestData: any) {
            return axios.post("http://localhost:8080/ground", requestData)
        }
    })


    const onSubmit = (values: any) => {
        apiCall.mutate(values,{
            onSuccess(res){
                alert(res?.data?.message)
            }
        })
    }

    return (<>
        <form onClick={handleSubmit(onSubmit)}>
            <div>
                <label>Ground Name</label>
                <input type="text" {...register("groundName", {
                    required: "this is required field"
                })}/>
                <p>{errors?.groundName?.message}</p>


            </div>
            <div>
                <input type="submit"/>
            </div>
        </form>
    </>)
}

export default Form;