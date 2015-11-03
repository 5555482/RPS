function addFixture(html){
  var fixtures = jasmine.getFixtures();  
  if (!fixtures.fixtureList){
    fixtures.fixtureList = [];
  }
  fixtures.fixtureList.push(html);
  fixtures.set(fixtures.fixtureList.join());
}

function clearMyFixtures(){
  delete jasmine.getFixtures().fixtureList;
}