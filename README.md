# AMC Shift Scheduler

## Overview
AMC Shift Scheduler is a sophisticated employee scheduling tool designed specifically for restaurant and hospitality businesses. This application uses constraint programming to automatically generate optimal monthly work schedules while balancing operational requirements and employee preferences.

## Features

- **Automatic Schedule Generation**: Creates complete monthly schedules with 8-hour shifts
- **Constraint-Based Optimization**: Uses Google OR-Tools for constraint satisfaction
- **Balanced Employee Schedules**: Ensures equitable distribution of shifts
- **Contract-Aware Scheduling**: Handles both full-time and part-time employees
- **Labor Cost Optimization**: Minimizes labor costs while meeting staffing requirements
- **Export to Excel**: Generates professional Excel reports with:
  - Comprehensive monthly schedule
  - Manager dashboard with staffing analytics
  - Employee utilization statistics

## Technical Details

- **Scheduling Approach**: Uses CP-SAT solver from Google OR-Tools
- **Constraints**:
  - Minimum staffing requirements per shift
  - Maximum working hours per employee
  - Single shift per day per employee
  - Contract-specific requirements (full-time vs. part-time)
  - Required rest periods between shifts
  - Weekend shift distribution preferences

- **Optimization Goals**:
  - Minimize total labor costs
  - Maintain adequate staffing levels
  - Balance employee workload
  - Fair weekend shift distribution

## Usage

1. Prepare an employee data Excel file with the following columns:
   - `employee_name`: Full name of the employee
   - `contract`: Type of contract ("full-time" or "part-time")
   - `hours_per_month`: Maximum hours the employee can work per month

2. Run the scheduler:
   ```python
   python amc_scheduler.py
   ```

3. The application will:
   - Load employee data
   - Generate an optimized schedule
   - Export the schedule to `restaurant_schedule.xlsx`

## Sample Output

The generated Excel file contains:

1. **Monthly Schedule Sheet**: 
   - Complete calendar view of all employee shifts
   - Shift times clearly marked for each employee
   - Weekend days highlighted

2. **Manager Dashboard Sheet**:
   - Employee hours summary with utilization percentages
   - Daily staffing overview
   - Key performance indicators for staffing levels
   - Visual indicators for optimal, understaffed, and overstaffed days

## Requirements

- Python 3.6+
- Required libraries:
  - ortools
  - pandas
  - openpyxl
  - datetime

## Getting Started

1. Clone this repository
2. Install dependencies: `pip install -r requirements.txt`
3. Prepare your employee data Excel file
4. Run the scheduler

## Handling Infeasible Schedules

The scheduler is designed to automatically relax constraints when it cannot find a feasible solution. It will try three levels of constraint relaxation:
1. Standard constraints
2. Relaxed minimum staffing requirements
3. Greatly relaxed staffing requirements

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
