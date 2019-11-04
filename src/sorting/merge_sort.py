# runningtime = O(nlogn)
# space = O(n)


def merge_sort(input):
    if len(input) <= 1:
        return input
    mid = int(len(input) / 2)
    left, right = merge_sort(input[:mid]), merge_sort(input[mid:])
    return merge(left, right)


def merge(left, right):
    result = []
    left_point = right_point = 0
    while left_point < len(left) and right_point < len(right):
        if left[left_point] < right[right_point]:
            result.append(left[left_point])
            left_point += 1
        else:
            result.append(right[right_point])
            right_point += 1

    result.extend(left[left_point:])
    result.extend(right[right_point:])
    return result


def main():
    a = [2, 3, 6, 7, 1, 4, 9, 11, 22, 10, 3, 2]
    b = merge_sort(a)
    print(a)
    print(b)


if __name__ == "__main__":
    main()