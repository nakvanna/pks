<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('latin');
            $table->string('gender');
            $table->string('photo');
            $table->date('dob');
            $table->string('std_contact');
            $table->string('pob');
            $table->string('address');
            $table->string('father_name');
            $table->string('father_job');
            $table->string('father_contact');
            $table->string('mother_name');
            $table->string('mother_job');
            $table->string('mother_contact');
            $table->string('temp_grade')->default('ns');
            $table->float('discount')->default(0);
            $table->boolean('status')->default(true);
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
        Schema::dropIfExists('students');
    }
}
