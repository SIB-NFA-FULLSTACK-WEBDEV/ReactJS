const LoginForm = () => {
    const style= {
        form: {display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "300px",
        margin: "auto"
    },
        input: {
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
        },
        button: {
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
        },
    };
    return (
        <form style={style.form}>
            <input style={style.input} type="text" placeholder="Username" />
            <input style={style.input} type="email" placeholder="Email" />
            <input style={style.input} type ="password" placeholder="Password" />
            <button style={style.button}>Login</button>
        </form>
    );
    }

export default LoginForm;