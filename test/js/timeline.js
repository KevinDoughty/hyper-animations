suite('timeline-tests', function() {
  setup(function() { document.timeline.players = []; });
  test('players are in effect but ticking stops once forward fill is reached', function() {
    tick(100);
    var player = document.body.animate([], {duration: 1000, fill: 'forwards'});
    tick(600);
    assert.equal(document.timeline.players.length, 1);
    assert.equal(isTicking(), true);
    tick(1100);
    assert.equal(player.finished, true);
    assert.equal(document.timeline.players.length, 1);
    assert.equal(isTicking(), false);
  });
});