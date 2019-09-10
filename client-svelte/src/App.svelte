<script>
  let name = "Logan";
  const handleLogin = e => {
    const loginUrl = "http://localhost:8000/api/user/login";

    e.preventDefault();
    const userData = {
      email: "abc@123.com",
      password: "password"
    };
    fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        // setIsLoggedIn(res.token ? true : false);
        if (res.token) {
          console.log("user: ", res.user);
          console.log("token: ", res.token);
          // setCurrentUser({
          // 	...res.user,
          // 	token: res.token
          // });
        } else if (res.error) {
          // setErrorMessage(res.error);
        }
      })
      .catch(error => {
        console.log("error message: ", error);
      });
    // setUserEmail("");
    // setUserPassword("");
  };
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>
<button on:click={handleLogin}>Login</button>
