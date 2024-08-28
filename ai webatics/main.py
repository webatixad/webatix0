import tkinter as tk

def submit_complaints():
    selected_complaints = []
    for var in complaint_vars:
        if var.get():
            selected_complaints.append(var.cget("label"))
    print("Selected complaints:", selected_complaints)

root = tk.Tk()
root.title("Complaint Selection")

complaint_vars = []
for complaint in ["Complaint 1", "Complaint 2", "Complaint 3"]:
    var = tk.IntVar()
    checkbutton = tk.Checkbutton(root, text=complaint, variable=var)
    checkbutton.pack()
    complaint_vars.append(var)

submit_button = tk.Button(root, text="Submit", command=submit_complaints)
submit_button.pack()

root.mainloop()