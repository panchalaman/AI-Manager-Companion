def generate_shift_plan(num_employees, num_shifts):
    """
    Generates a basic shift plan.
    """
    shifts = []
    employees = [f"Employee {i+1}" for i in range(num_employees)]
    for _ in range(num_shifts):
        shifts.append(employees)

    return shifts

def main():
    shift_plan = generate_shift_plan(3, 2)
    print(shift_plan)

if __name__ == "__main__":
    main()