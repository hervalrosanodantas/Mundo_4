package com.example.domaapp;

//Herval Rosano Dantas

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class AddTaskActivity extends AppCompatActivity {
    private Button addTaskButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_task);

        addTaskButton = findViewById(R.id.confirmButton);

        addTaskButton.setOnClickListener(new View.OnClickListener() {

            @Override
            public  void onClick(View v){
                EditText taskEdiText = findViewById(R.id.taskEditText);
                String taskStr = (taskEdiText.getText().toString());

                Intent resultIntent = new Intent();
                resultIntent.putExtra("task", taskStr);

                setResult(RESULT_OK, resultIntent);
                finish();

            }
        });
    }
}