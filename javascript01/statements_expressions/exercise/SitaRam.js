function bookTickets(numberOfSeats) {
    const ticketPrice = 9;
    let totalCost = 0;

    if (numberOfSeats <= 2) {
        // Cost per ticket remains $9 if seats are 2 or less
        totalCost = numberOfSeats * ticketPrice;
        console.log(`Booking successful! Number of seats: ${numberOfSeats}. Total cost: $${totalCost.toFixed(2)}`);
    } else if (numberOfSeats >= 5) {
        // Booking is not allowed if seats are 5 or more
        console.log("Booking not allowed for 5 or more seats.");
    } else {
        // Apply discounts for 3 or 4 seats
        let discountPercent = 5; // Starting discount at 5% for the 1st additional seat beyond 2
        for (let i = 1; i <= numberOfSeats; i++) {
            if (i > 2) {
                // Apply increasing discount for each additional seat beyond the second
                let discount = (ticketPrice * discountPercent) / 100;
                let seatCost = ticketPrice - discount;
                totalCost += seatCost;
                console.log(`Ticket for Customer ${i - 2} gets ${discountPercent}% discount!, Cost is: $${seatCost.toFixed(2)}`);
                discountPercent += 2; // Increase discount by 2% for each additional seat
            } else {
                // No discount for the first two seats
                totalCost += ticketPrice;
            }
        }
        const originalCost = numberOfSeats * ticketPrice;
        console.log(`For ${numberOfSeats} tickets, you need to pay: $${totalCost.toFixed(2)} instead of $${originalCost}`);
    }
}

// Test with different values for the number of seats
bookTickets(1); // Booking 1 seat
bookTickets(2); // Booking 2 seats
bookTickets(3); // Booking 3 seats
bookTickets(4); // Booking 4 seats
bookTickets(5); // Booking not allowed
