# levytsroman.github.io
Personal portfolio page, aspiring jekyll theme.

To get started: 

Make sure Ruby is installed on your computer, for detailed information on how check this link https://www.ruby-lang.org/en/documentation/installation/

1) clone the repo by running in your bash terminal/cmd, make sure to change url below to url of your own fork.

```
git clone https://github.com/LevytsRoman/levytsroman.github.io.git
```

2) go into the folder with 
```
cd levytsroman.github.io
```

3) run 
```
bundle install
``` 
  to install all the necessary gems(those are ruby libraries)

4) run 
```
bundle exec jekyll serve
``` 
  this will start jekyll which will regenerate your html every time you make a change. You should now be able to navigate to http://localhost:4000 and see the site.

5) finally open a new terminal window and run 
```
bash sass_watch.sh
```
  This will start sass and compile various sass files into css.

Now that you're up and running try changing _config.yml such as email title, linkedin url etc, restart jekyll and see your changes. 

For more info on how to use jekyll visit https://jekyllrb.com/docs/home/