package io.dcloud.HelloH5;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;

import com.android.HelloH5.R;

public class TestActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_test);
        Intent mIntent = getIntent();
        if (mIntent!=null){
            //获取Intent，通过key获取对应的值
            String uniValue = mIntent.getStringExtra("uni_key");
            Toast.makeText(this, "uniValue="+uniValue, Toast.LENGTH_SHORT).show();
        }
    }
}