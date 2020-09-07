# My Eat List

## Track what you eat!!!

![header](https://i.imgur.com/ZON2pOE.png)

---

With this app you can save a daily list of wht you eat from a list, and check your recomended calories based on height, age and weight.
<div>
 <img src="https://i.imgur.com/VqvkxRZ.png" width="45%">
 <img src="https://i.imgur.com/aAVDfLR.png" width="45%">
</div>

---

# Try it out!!

You want to try it out without any installation? YOU CAN! Just check out the [live version](https://my-eat-list.netlify.app/).

# Development Setup

Steps: 
- Clone this repo:
```
$ git clone git@github.com:YoseptF/my-eat-list-frontend.git
```
- Move to the lastest branch:
```
$ git checkout [branch name]
```
- Install the dependencies:
```
$ npm install
```
- Run the developer server:
```
$ npm start
```

You are gonna need some api keys to populate your .env, you can get them here:

- [Imgur API](https://apidocs.imgur.com/)

There are 2 way you can run this program locally:

1. You can run the backend on your machine at the same time, for that you're gonna need to:
   - Follow the steps over:  [here](https://github.com/YoseptF/my-eat-list-backend)
   - set the env so that it looks like this: 
   ```
    REACT_APP_CLIENT_ID={IMGUR_API_KEY}
    REACT_APP_BACKEND_URL=http://localhost:4000
   ```
   - And run `npm start`
2. You can let the frontend connect to the backend on the live version, although this has some caveats, to connect with the online api you need to be on a secure conection, this means opening the react developer server on `https` instead of `http` and this may cause your browser to give you an alert like this one

    <img src="https://i.imgur.com/noFPOhi.png" width="250">

    in this case you need to click on advanced, and enter the page, It should only happen the first time.

    Another viable option is to sign it yourself, in which case you can follow the official docs [here](https://create-react-app.dev/docs/using-https-in-development/). But I HIGHLY recommend to just enter manually, and save the time, the code is open source, so there's nothing harmful in the code.

    After you choose what to do with the 'ssl-situation':
    - set the .env to be like this:

    ```
    REACT_APP_CLIENT_ID={IMGUR_API_KEY}
    HTTPS=true
    REACT_APP_BACKEND_URL=https://my-eat-list-backend.herokuapp.com
    ```
    - And run `npm start`

# Build with
- [React](https://reactjs.org/)
- [Netlify](https://app.netlify.com)
- [Heroku](https://dashboard.heroku.com/apps)
- [FontAwesome](https://fontawesome.com/)
- Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
- Code from myself [Joseph Flores](https://github.com/YoseptF?tab=repositories)