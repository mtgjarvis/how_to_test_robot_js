const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
  let testRobot = newRobot(true, true, false);
  // act
  let testStation = station(testRobot);
  // assert
  expect(testStation).toEqual(1);
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
  let testRobot = newRobot(true, false, true);
  // act
  let testStation = station(testRobot);

  // assert
  expect(testStation).toEqual(2);
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange
  let testRobot = newRobot(true, false, false);
  // act
  let testStation = station(testRobot);
  // assert
  expect(testStation).toEqual(3);
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange
  let testRobot = newRobot(false, false, false);

  // act
  let testStation = station(testRobot);
  // assert
  expect(testStation).toEqual(4);
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  let testRobot = newRobot(false, false, false);
  testRobot.todos = []
  // act
  let testTodo = prioritizeTasks(testRobot);
  // assert
  expect(testTodo).toEqual(-1);
})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
  let testRobot = newRobot(false, false, false);
  testRobot.todos = [1,9]
  // act
  let testTodo = prioritizeTasks(testRobot);

  // assert
  expect(testTodo).toEqual(9);
});

test('test_workday_on_day_off_returns_false', () => {
  // arrange
  let testRobot = newRobot(false, false, false);
  testRobot.dayOff = 'Monday'
  // act
  let testIsWorkday = isWorkday(testRobot, 'Monday');
  // assert
  expect(testIsWorkday).toEqual(false);
});

test('test_workday_not_day_off_returns_true', () => {
  let testRobot = newRobot(false, false, false);
  testRobot.dayOff = 'Monday'
  // act
  let testIsWorkday = isWorkday(testRobot, 'Tuesday');
  // assert
  expect(testIsWorkday).toEqual(true);
});
