<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudyInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('study_infos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('year');
            $table->bigInteger('student_id');
            $table->bigInteger('collection_id'); //equal study info
            $table->dateTime('date_pay')->nullable();
            $table->dateTime('last_date_pay');
            $table->integer('last_term')->default(0);
            $table->boolean('is_used')->default(true);
            $table->string('from_class')->default(null)->nullable();
            $table->string('to_class')->default(null)->nullable();
            $table->date('date_change')->default(null)->nullable();
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
        Schema::dropIfExists('study_infos');
    }
}
