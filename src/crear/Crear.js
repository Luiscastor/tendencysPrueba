import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useHistory } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { saveProduct } from '../request/Request';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit">
                Luis Castor
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}




export default function Crear() {

    const history = useHistory()
    const [sku, setSku] = useState('')
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)
    const [error3, setError3] = useState(false)
    const [error4, setError4] = useState(false)

    const  GuardarProducto  = ()  =>{

        if (sku === ""){
            setError1(true)
            toast.error('Error. Sku field must be filled.',{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar:false,
                closeOnClick: true,
                pauseOnHover:true,
                draggable: true,
                progress: undefined
            });
              return
        }else{setError1(false)}
        if (name === ""){
            setError2(true)
            toast.error('Error. Name field must be filled.',{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar:false,
                closeOnClick: true,
                pauseOnHover:true,
                draggable: true,
                progress: undefined
            });
              return
        }else{setError2(false)}
        if (quantity === ""){
            setError3(true)
            toast.error('Error. Quantity field must be filled.',{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar:false,
                closeOnClick: true,
                pauseOnHover:true,
                draggable: true,
                progress: undefined
            });
              return
        }else{setError3(false)}
        if (price === ""){
            setError4(true)
            toast.error('Error. Price field must be filled.',{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar:false,
                closeOnClick: true,
                pauseOnHover:true,
                draggable: true,
                progress: undefined
            });
              return
        }else{setError4(false)}

        var data = {
            "order": {
                "email": "lcastor34@gmail.com",
                "currency": "MXN",
                "items": [
                  {
                    "sku": sku,
                    "name": name,
                    "quantity": quantity,
                    "price": price,
                  }
                ],
              }
        }

       try {
        saveProduct(data).then((e)=>{
            toast.success('You have saved the item correctly.',{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar:false,
                closeOnClick: true,
                pauseOnHover:true,
                draggable: true,
                progress: undefined
            });
            setTimeout(()=>{
                history.push('/')
            },3000)
        })
       } catch (error) {
        console.log(error)
       }
         
      }


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <div>
            <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            rtl={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            </div>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} style={{ borderRadius: 10 }}>
                    <Typography component="h1" variant="h4" align="center" color="primary">
                        ITEMS
                    </Typography>
                    <TextField
                        error={error1}
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                        label="SKU" variant="standard" style={{ width: '100%' }} />
                    <TextField label="NAME" variant="standard" style={{ width: '100%', marginTop: '2.5%' }}
                        error={error2}
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <TextField label="QUANTITY" variant="standard" style={{ width: '100%', marginTop: '2.5%' }} type={'number'}
                        error={error3}
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)} />
                    <TextField label="PRICE" variant="standard" style={{ width: '100%', marginTop: '2.5%' }} type={'number'}
                        error={error4}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                    <div style={{ margin: 10, flexDirection: 'row-reverse', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Button variant="contained" style={{ fontWeight: 'bold', height: '50%', marginRight: '15%', width: '30%' }}
                            onClick={GuardarProducto}
                        >SAVE</Button>
                        <Button variant="contained" style={{ fontWeight: 'bold', height: '50%', marginLeft: '15%', width: '30%' }}
                            onClick={() => history.push('/')}
                        >BACK</Button>
                    </div>
                </Paper>
                <Copyright />
            </Container>
        </ThemeProvider>
    );
}


const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2'
        }
    }
});