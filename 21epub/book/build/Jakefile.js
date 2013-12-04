 
// desc('Build javascript');
task('js', [], function () {
    jake.exec('r.js -o buildforwriting.js', function () {
      console.log('Built javascript');
      complete();
    }, { printStdout: true });
});

task('default', ['js'], function () {
});