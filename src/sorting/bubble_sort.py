# runtimeO(n ^ 2)
# space(1)


def bubble_sort(arr):
    for j in range(len(arr)):
        for i in range(len(arr) - j - 1):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
    return arr


def main():
    a = [16,1,0,9,100]
    print(a)
    b = bubble_sort(a)
    print(b)


if __name__ == "__main__":
    main()
