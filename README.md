# levytsroman.github.io
Personal portfolio page, aspiring jekyll theme.

# To get started: 

Make sure Ruby is installed on your computer, for detailed information on how check this link https://www.ruby-lang.org/en/documentation/installation/

1) fork the repo

2) If you want to utilize gh-pages hosting rename the cloned repository to follow the following format:

``` 
  username.github.io
```

3) clone the repo by running in your bash terminal/cmd, make sure to change url below to url of your own fork.

```
git clone https://github.com/LevytsRoman/levytsroman.github.io.git
```

4) go into the folder with 
```
cd levytsroman.github.io
```

5) run 
```
bundle install
``` 
  to install all the necessary gems(those are ruby libraries)

6) run 
```
bundle exec jekyll serve
``` 
  this will start jekyll which will regenerate your html every time you make a change. You should now be able to navigate to http://localhost:4000 and see the site.

7) finally open a new terminal window and run 
```
bash sass_watch.sh
```
  This will start sass and compile various sass files into css.

Now that you're up and running try changing _config.yml such as email title, linkedin url etc, restart jekyll and see your changes. 
* every time you change _config.yml you'll have to restart the server to see your changes.

# Usage

Most of the content of the site comes from the ```_data``` folder.

The website is designed to have 4 sections if you want to change what they are, modify the ```sections.yml``` file inside ```_data``` folder. If you do change the sections, make sure not to change the class property, as css file rely on them being called a cetain way.

To update projects modify the ```projects.yml```, you can add your own tags and later reference them in ```_includes/project_box``` by putting 
```{{project.your_tag}}``` in the html.

If you want to use the form in the contact page, you'll need to make an account with https://formspree.io/. Then simply update the email in the _config.yml to whatever you used to register.

For more info on how to use jekyll visit https://jekyllrb.com/docs/home/