p "Hello World";

adjective = "Big Bad";

p "Hello #{adjective} World!";

bighello = "Hello World";

p bighello.upcase

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15];

p nums.uniq;

p nums.push(5);

nums.pop;

p nums;

nums.shift;

p nums

nums.unshift(58);

p nums;

p nums.length();

p nums.include?(8)

p nums.find_all{ |num| num > 10};

p nums.all?{ |n| n > 0};

p nums.any?{ |n| n%8 == 0 };

p nums.count{ |n| n > 4 };

p nums.each_with_index.map { |n, index| n*index};

p nums.find{ |i| i % 7 == 0 and i % 5 == 0 and i > 0};

p nums.find_index{ |i| i % 7 == 0 and i % 5 == 0 and i > 0};

p nums.first(3);

p nums.last(5);

p nums.group_by { |n| n % 3 == 0 };

p nums.minmax();

p nums.reject { |n| n % 3 == 0 };

p nums.select { |n| n % 5 == 0 };

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

p colors.sample;

p colors.reverse();

p colors.map(&:upcase);

def find_area (height, width)
	height * width
end

p find_area(4, 5);

newnums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]

def multiply_each_by_five arr

	arr.collect { |n| n * 5}
end

p multiply_each_by_five(newnums);

