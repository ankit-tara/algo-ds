var middleNode = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

//When traversing the list with a pointer slow, make another pointer fast that 
//traverses twice as fast. When fast reaches the end of the list, slow must be in the middle.