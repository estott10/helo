module.exports={

    addNewUser: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {username, password} = req.body;

        dbInstance.register_user(username, password)
            .then(result => {
              res.sendStatus(200);
            }).catch(err => {
                res.status(500).send( {errorMessage:'Failed to Register User'});
                console.log(err);
        })
    },

    loginUser: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {username, password} = req.body;

        dbInstance.login_user(username, password)
          .then(result => {
              res.status(200).send(result);
          }).catch( err => { res.status(500).send( {errorMessage: 'Failed to Login User'});
              console.log(err);
            })
        },

    getPosts: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id, title} = req.query;
        
        dbInstance.get_posts(title, id)
            .then( result => {
                res.status(200).send(result)
            }).catch( err => { res.status(500).send( {errorMessage: 'Failed to Retrieve Posts'} );
                console.log(err); 
            })
        },

    getSinglePost: (req, res, next) => {
        const dbInstance = req.app.get('db');
  
        dbInstance.get_onepost(req.params.postid)
            .then( result => {
                res.status(200).send(result)
            }).catch( err => { res.status(500).send( {errorMessage: 'Failed to Retrieve Posts'} );
                console.log(err); 
            })            
    },
    createPost: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {title, img, content} = req.body;
        const {userid} = req.params;
  
        dbInstance.create_post(title, img, content, userid)
            .then( result => {
                res.sendStatus(200)
            }).catch( err => { res.status(500).send( {errorMessage: 'Failed to Retrieve Posts'} );
                console.log(err); 
            })            
    }
}
