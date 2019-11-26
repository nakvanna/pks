<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('profile');
            $table->string('kh_name');
            $table->string('en_name');
            $table->string('gender');
            $table->dateTime('dob');
            $table->string('position');
            $table->string('degree_note');
            $table->dateTime('start_work');
            $table->text('contact');
            $table->text('pob');
            $table->text('addr');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
