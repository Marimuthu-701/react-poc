import React, {useState } from "react";

import { Button, Input, Label} from '@components';
import { login } from "@services/Auth";

const Login = (props) => {
    const [formData, setFormData] = useState({
        email:null,
        password:null
    });
    const [loader, setLoader] = useState(false);

    const formHandle = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]:value}));
    }

    const formSubmit = (e) => {
        e.preventDefault();
        login(formData).then((res)=> { console.log(res)});
    }

    return (
        <div className="container py-5">
            <form onSubmit={formSubmit}>
                <div className="row">
                        <div className="col">
                            <Label 
                                name="Email/Phone" 
                                htmlFor="email"
                            />
                            <Input 
                                type="text" 
                                name="email"
                                className="form-control" 
                                placeholder="Email"
                                onChange={formHandle}
                            />
                        </div>
                        <div className="col">
                            <Label 
                                name="Password" 
                                htmlFor="email"
                            />
                            <Input 
                                type="password"
                                name="password"
                                className="form-control" 
                                placeholder="Password"
                                onChange={formHandle}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-3 text-center">
                            <Button type="submit" name="submit"></Button>
                        </div>
                    </div>
            </form>
        </div>
    )
}

export default Login;