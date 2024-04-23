const std = @import("std");

fn square(comptime N: usize) usize {
    return N * N;
}

pub fn main() void {
    const number = 5;
    const result = square(number);
    std.debug.print("Square of {} is {}\n", .{number, result});
}
