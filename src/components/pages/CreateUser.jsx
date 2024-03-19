import { UserValidation } from '@/lib/validations/user.js';
import CreateForm from '@/components/forms/CreateForm';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const CreateUser = () =>{
 return (
 	<>
 		<div className="main-container">
 		<ToastContainer/>
 			<div className="w-full max-w-xl glassmorphism rounded-[18px] p-5">
 				<div>
 				 <h3 className="text-heading1-semibold text-[#150B62] uppercase mb-3 text-center">Create A User</h3>
 				  <div>
 				  	<CreateForm/>
 				  </div> 
 				</div>
 			</div>
 		</div>
 	</>
 	)
}
export default CreateUser;